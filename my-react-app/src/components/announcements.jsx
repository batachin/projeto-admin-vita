export default function announcements() {
    return (
      <>
        <div className="announcements">
          <h2 className="announcement">Announcements</h2>
          <div className="cards" id="announcements">
            <div className="card-announcements">
              <div className="titule-announcements">Titulo</div>
              <div className="descricao-announcements">Descricao</div>
            </div>
            <div className="card-announcements">
              <div className="titule-announcements">Titulo</div>
              <div className="descricao-announcements">Descricao</div>
            </div>
            <div className="card-announcements">
              <div className="titule-announcements">Titulo</div>
              <div className="descricao-announcements">Descricao</div>
            </div>
          </div>
        </div>

        <h2 className="trending">Trending</h2>
        <div className="perfils">Tem ninguem aqui...</div>
      </>
    );
}