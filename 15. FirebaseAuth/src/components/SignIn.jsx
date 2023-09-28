import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth, signOut } from "../firebase";
import { useState } from "react";

function SignIn() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var usr = userCredential.user;
        console.log(usr);
        setUser(usr);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(`${errorCode} ${errorMessage}`);
      });
  };

  return (
    <>
      <Form className="container" onSubmit={loginUser}>
        <h2> {user ? user.email : "No User"} </h2>
        <h3>
          {user && (
            <Button className="danger" onClick={() => signOut()}>
              Logout
            </Button>
          )}
        </h3>
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <hr />
    </>
  );
}

export default SignIn;
