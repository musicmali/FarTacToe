import './UserProfile.css'

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      {user.pfpUrl && (
        <img 
          src={user.pfpUrl} 
          alt={user.username || user.displayName} 
          className="user-avatar"
        />
      )}
      <span className="user-name">
        {user.displayName || user.username || 'Player'}
      </span>
    </div>
  )
}

export default UserProfile

