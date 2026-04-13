import React, { useState } from 'react';
import { Pencil, Trash2, Check, X } from 'lucide-react';

export default function NoteCard({ note, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);

  const handleSave = () => {
    onUpdate(note._id, { title: editTitle, content: editContent });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="glass-panel note-card edit-mode">
        <input 
          type="text" 
          className="form-control" 
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          style={{ marginBottom: '10px', fontSize: '1.2rem', fontWeight: 'bold' }}
        />
        <textarea 
          className="form-control" 
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          rows="4"
          style={{ resize: 'vertical' }}
        />
        <div className="note-actions" style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
          <button className="btn" onClick={handleSave} style={{ padding: '6px 12px', flex: 1 }}>
            <Check size={16} /> Save
          </button>
          <button className="btn btn-secondary" onClick={() => setIsEditing(false)} style={{ padding: '6px 12px', flex: 1 }}>
            <X size={16} /> Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-panel note-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ marginBottom: '10px', color: 'var(--secondary)' }}>{note.title}</h3>
      <p style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-wrap', flex: 1 }}>{note.content}</p>
      
      <div className="note-meta" style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <small style={{ color: 'rgba(255,255,255,0.4)' }}>
          {new Date(note.createdAt).toLocaleDateString()}
        </small>
        <div className="actions" style={{ display: 'flex', gap: '8px' }}>
          <button className="btn-icon" onClick={() => setIsEditing(true)} aria-label="Edit node" style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '4px' }}>
            <Pencil size={18} />
          </button>
          <button className="btn-icon" onClick={() => onDelete(note._id)} aria-label="Delete node" style={{ background: 'transparent', border: 'none', color: 'var(--danger)', cursor: 'pointer', padding: '4px' }}>
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
