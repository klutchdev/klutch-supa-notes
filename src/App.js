import React, { useRef, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Modal from "./components/Modal";
// import Navigation from "./components/Navigation";
// import Toast from "./components/Toast";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./views/Home";
import LandingPage from "./views/LandingPage";
import NewTaskPage from "./views/NewTask";
import SettingsPage from "./views/Settings";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, saveNewTask } from "./firebase";
import Loader from "./components/progress/Spinner";
import SharpButton from "./components/buttons/SharpButton";

function App() {
  const modal = useRef(null);
  const [user, loading, error] = useAuthState(auth);
  const openModal = () => modal.current.open();
  const closeModal = () => modal.current.close();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  } else {
    return (
      <Router>
        <Switch>
          {user ? (
            <>
              <Route exact path="/new-task">
                <NewTaskPage openModal={openModal} />
              </Route>
              <Route exact path="/settings">
                <SettingsPage openModal={openModal} />
              </Route>
              <Route exact path="/">
                <HomePage openModal={openModal} />
              </Route>

              <Modal fade ref={modal}>
                <h2>
                  <input
                    className="task-title"
                    type="text"
                    placeholder="+ New task"
                    onChange={handleTitle}
                    value={title}
                  />
                </h2>
                <textarea
                  className="task-input"
                  type="text"
                  placeholder="Task content"
                  onChange={handleContent}
                  value={content}
                />
                <div style={{ display: `flex` }}>
                  <SharpButton
                    isBig="true"
                    onClick={() => {
                      saveNewTask({ title, content }).then(() => {
                        setContent("");
                        setTitle("");
                        closeModal();
                      });
                    }}
                    text="✔ Save"
                  />
                  <SharpButton
                    isBig="true"
                    onClick={closeModal}
                    text="✘ Back"
                    isDanger="true"
                  />
                </div>
              </Modal>
            </>
          ) : (
            <>
              <Route exact path="/" component={LandingPage} />
            </>
          )}
        </Switch>
      </Router>
    );
  }
}

export default App;
