export default `

.Header {
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: black;
  height: 50px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}

  .Header__wrapper {
    align-items: center;
    display: flex;
    height: 50px;
  }

    .Header__logo-link {
      display: block;
      flex: 0 0 50px;
    }

      .Header__logo {
        display: block;
        height: auto;
        width: 100%;
      }

    .Header__nav {
      display: flex;
      justify-content: flex-end;
      margin: 0 20px;
      width: 100%;
    }

      .Header__nav-item {
        flex: 0 0;
        margin: 0 10px;
      }

        .Header__nav-link {
          border-bottom: 2px solid transparent;
          color: inherit;
          display: block;
          font-size: 14px;
          padding: 8px 5px;
          position: relative;
          text-decoration: none;
          top: 2px;
          transition: border 0.3s ease;
        }

        .Header__nav-link:hover {
          border-bottom-color: black;
        }
`;