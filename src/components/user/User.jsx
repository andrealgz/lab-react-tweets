import userEvent from "@testing-library/user-event";

function User ({name, handle }) {
  return(
    <span className="user">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
};

export default User;