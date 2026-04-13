import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plus } from 'lucide-react';
import api from '../api';
import NoteCard from '../components/NoteCard';

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // New Note State
  const [showAdd, setShowAdd] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
      return;
    }
    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
    fetchNotes(parsedUser._id);
  }, [navigate]);

  const fetchNotes = async (userId) => {
    try {
      const res = await api.get('/notes', { params: { userId } });
      setNotes(res.data);
    } catch (err) {
      console.error('Error fetching notes:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;
    
    try {
      const res = await api.post('/notes', { 
        title: newTitle, 
        content: newContent,
        userId: user._id
      });
      setNotes([...notes, res.data]);
      setNewTitle('');
      setNewContent('');
      setShowAdd(false);
    } catch (err) {
      console.error('Error adding note:', err);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes(notes.filter(n => n._id !== id));
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  const handleUpdateNote = async (id, updatedData) => {
    try {
      const res = await api.put(`/notes/${id}`, updatedData);
      setNotes(notes.map(n => n._id === id ? res.data : n));
    } catch (err) {
      console.error('Error updating note:', err);
    }
  };

  if (loading) {
    return <div className="center-flex"><h2>Loading...</h2></div>;
  }

  return (
    <div className="page-container">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ background: 'linear-gradient(to right, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0 }}>
            My Notes
          </h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Welcome back, {user?.Username || user?.email}</p>
        </div>
        <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '8px 16px' }}>
          <LogOut size={18} /> Logout
        </button>
      </header>

      <div style={{ marginBottom: '30px' }}>
        {!showAdd ? (
          <button onClick={() => setShowAdd(true)} className="btn">
            <Plus size={20} /> New Note
          </button>
        ) : (
          <div className="glass-panel" style={{ padding: '20px', maxWidth: '600px', animation: 'fadeIn 0.3s ease-out' }}>
            <h3 style={{ marginBottom: '15px' }}>Create New Note</h3>
            <form onSubmit={handleAddNote}>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Note Title" 
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
                autoFocus
              />
              <textarea 
                className="form-control" 
                placeholder="What's on your mind?" 
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                style={{ width: '100%', marginBottom: '15px', minHeight: '100px', resize: 'vertical' }}
              />
              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" className="btn">Save Note</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowAdd(false)}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '20px',
        animation: 'slideIn 0.5s ease-out'
      }}>
        {notes.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
            <p>No notes yet. Create one to get started!</p>
          </div>
        ) : (
          notes.map(note => (
            <NoteCard 
              key={note._id} 
              note={note} 
              onDelete={handleDeleteNote} 
              onUpdate={handleUpdateNote} 
            />
          ))
        )}
      </div>
    </div>
  );
}
