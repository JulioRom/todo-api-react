import PropTypes from "prop-types";

const UserForm = ({ newUsername, setNewUsername, handleCreateUser, username, setUsername }) => {
  return (
    <div className="card p-3 mb-3">
      <h5>Create or Switch User</h5>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleCreateUser}>
        Create or Set User
      </button>
      <div className="mt-3">
        <h6>Current User: <span className="badge bg-secondary">{username}</span></h6>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </div>
  );
};

UserForm.propTypes = {
  newUsername: PropTypes.string.isRequired,
  setNewUsername: PropTypes.func.isRequired,
  handleCreateUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
};

export default UserForm;