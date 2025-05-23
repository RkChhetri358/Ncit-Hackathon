import React, { useState } from 'react';
import './Complaint.css';

const Complaint = () => {
  const [activeTab, setActiveTab] = useState('nearMe');
  const [complaints, setComplaints] = useState([
    { id: 1, title: 'Complaint 1', description: 'Vote system: Government approval for', votes: 0, status: 'pending' },
    { id: 2, title: 'Complaint 2', description: '', votes: 0, status: 'pending' },
    { id: 3, title: 'Complaint 3', description: '', votes: 0, status: 'pending' },
    { id: 4, title: 'Complaint 4', description: '', votes: 0, status: 'pending' },
    { id: 5, title: 'Complaint 5', description: '', votes: 0, status: 'pending' },
  ]);
  const [solvedComplaints, setSolvedComplaints] = useState([]);
  const [showAddComplaint, setShowAddComplaint] = useState(false);
  const [newComplaint, setNewComplaint] = useState({ title: '', description: '' });

  const handleVote = (id) => {
    setComplaints(complaints.map(complaint => 
      complaint.id === id ? { ...complaint, votes: complaint.votes + 1 } : complaint
    ));
  };

  const handleAddComplaint = () => {
    const newId = complaints.length > 0 ? Math.max(...complaints.map(c => c.id)) + 1 : 1;
    setComplaints([
      ...complaints,
      {
        id: newId,
        title: newComplaint.title,
        description: newComplaint.description,
        votes: 0,
        status: 'pending'
      }
    ]);
    setNewComplaint({ title: '', description: '' });
    setShowAddComplaint(false);
  };

  const markAsSolved = (id) => {
    const complaint = complaints.find(c => c.id === id);
    setSolvedComplaints([...solvedComplaints, complaint]);
    setComplaints(complaints.filter(c => c.id !== id));
  };

  return (
    <div className="complaint-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Complaint System</h3>
        </div>
        
        <div className="sidebar-item" onClick={() => setActiveTab('updates')}>
          <span>Updates</span>
          <span className="badge">{complaints.length}</span>
        </div>
        
        <div className="sidebar-item" onClick={() => setActiveTab('nearMe')}>
          Complaints near me
        </div>
        
        <div className="sidebar-item" onClick={() => setActiveTab('solved')}>
          Solved Complaints
        </div>
        
        <div 
          className="sidebar-item add-complaint" 
          onClick={() => setShowAddComplaint(true)}
        >
          Add Complaint
        </div>
      </div>
      
      <div className="main-content">
        {showAddComplaint && (
          <div className="add-complaint-modal">
            <h3>Add New Complaint</h3>
            <input
              type="text"
              placeholder="Title"
              value={newComplaint.title}
              onChange={(e) => setNewComplaint({...newComplaint, title: e.target.value})}
            />
            <textarea
              placeholder="Description"
              value={newComplaint.description}
              onChange={(e) => setNewComplaint({...newComplaint, description: e.target.value})}
            />
            <div className="modal-actions">
              <button onClick={handleAddComplaint}>Submit</button>
              <button onClick={() => setShowAddComplaint(false)}>Cancel</button>
            </div>
          </div>
        )}
        
        {activeTab === 'nearMe' && (
          <div className="complaints-list">
            <h2>Complaints Near Me</h2>
            {complaints.map(complaint => (
              <div key={complaint.id} className="complaint-card">
                <h3>{complaint.title}</h3>
                {complaint.description && <p>{complaint.description}</p>}
                <div className="complaint-actions">
                  <button onClick={() => handleVote(complaint.id)}>
                    Vote ({complaint.votes})
                  </button>
                  <button onClick={() => markAsSolved(complaint.id)}>
                    Mark as Solved
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'solved' && (
          <div className="complaints-list">
            <h2>Solved Complaints</h2>
            {solvedComplaints.length > 0 ? (
              solvedComplaints.map(complaint => (
                <div key={complaint.id} className="complaint-card solved">
                  <h3>{complaint.title}</h3>
                  {complaint.description && <p>{complaint.description}</p>}
                </div>
              ))
            ) : (
              <p>No solved complaints yet</p>
            )}
          </div>
        )}
        
        {activeTab === 'updates' && (
          <div className="updates-list">
            <h2>Updates</h2>
            <p>You have {complaints.length} active complaints</p>
            <div className="updates-grid">
              {complaints.map(complaint => (
                <div key={complaint.id} className="update-card">
                  <h4>{complaint.title}</h4>
                  <p>Status: {complaint.status}</p>
                  <p>Votes: {complaint.votes}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Complaint;