import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const note = useSelector((state) =>
    state.notes.find(note => note.id === id)
  );

  const userData = useSelector((state) => state.auth.userData);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState({ title: '', content: '' });

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content || ''); 
    } else {
      navigate('/notes');
    }
  }, [note, navigate]);

  const validate = () => {
    let isValid = true;
    const newErrors = { title: '', content: '' };

    if (!title.trim()) {
      newErrors.title = 'Title cannot be empty.'; 
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch({ type: 'UPDATE_NOTE', payload: { id, title, content } });
      navigate('/notes');
    }
  };

  if (!note) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">Note not found.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-start min-h-screen px-4">
      <div className="prose p-6 bg-white rounded w-full max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-bold">Hello, {userData ? userData.email : 'Guest'}!</p>
          <div>
            <Link to="/dashboard" className="mr-4 text-black hover:text-blue-600 no-underline">
              About Me
            </Link>
            <Link to="/notes" className="mr-4 text-black hover:text-blue-600 no-underline">
              Notes
            </Link>
            <Link to="/login" className="text-black hover:text-blue-600 no-underline">
              Log Out
            </Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-4">Edit Note</h2>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`border p-2 w-full ${errors.title ? 'border-red-500' : ''}`}
              placeholder="Enter note title"
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>

          <div className="mb-4">
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={`border p-2 w-full ${errors.content ? 'border-red-500' : ''}`}
              rows="6"
              placeholder="Enter note content (optional)"
            />
          </div>

          <div className="flex justify-between mb-4">
            <Link to="/notes" className="text-black hover:text-blue-600 no-underline">
              Back
            </Link>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
