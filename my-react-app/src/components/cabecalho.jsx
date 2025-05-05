export default function cabecalho() {
    return (
      <>
        <div className="cabecalho">
          <input className="pesquisa" type="text" placeholder="Search" />
          <h1 className="name">name (@name)</h1>

          <div className="buttons">
            <button className="button" id="New">
              New
            </button>
            <button className="button" id="Upload">
              Upload
            </button>
            <button className="button" id="Share">
              Share
            </button>
          </div>
        </div>
      </>
    );
};