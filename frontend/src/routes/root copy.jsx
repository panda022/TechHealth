export default function Root() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>
          <h1>Health Tech Team Demo</h1>
          <nav>
            <ul>
              <li>
                <a href={`/emergency`}>Emergency Form</a>
              </li>
              <li>
                <a href={`/chatAI`}>ChatAI</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Other content can be added here */}
      </div>
    );
  }
  