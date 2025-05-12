export default function barraLateral() {
    return (
      <>
        <div className="barra-lateral">
          <div className="opcao">
            <h1 className="logo" id="dashboard">
              Dashboard
            </h1>

            <button className="opcoes" id="home">
              Home
            </button>

            <button className="opcoes" id="profile">
              Profile
            </button>

            <button className="opcoes" id="messagens">
              Messagens
            </button>

            <button className="opcoes" id="tasks">
              Tasks
            </button>

            <button className="opcoes" id="communities">
              Communities
            </button>

            <button className="opcoes" id="settings">
              Settings
            </button>

            <button className="opcoes" id="support">
              Support
            </button>

            <button className="opcoes" id="privacy">
              Privacy
            </button>
          </div>
        </div>
      </>
    );
};