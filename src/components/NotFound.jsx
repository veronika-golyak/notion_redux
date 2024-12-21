import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NotFound = ({ userData }) => {
  return (
    <div className="flex justify-center items-start min-h-screen px-4"> 
      <div className="prose p-6 bg-white rounded w-full max-w-xl text-center"> 
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="mb-4">Not Found</p>
        
        {userData ? (
          <Link to="/dashboard" className="text-blue-600 hover:underline">
            Home
          </Link>
        ) : (
          <Link to="/login" className="text-blue-600 hover:underline">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.auth.user,
});

export default connect(mapStateToProps)(NotFound);

