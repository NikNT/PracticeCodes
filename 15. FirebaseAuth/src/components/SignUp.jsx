import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth } from "../firebase";
import { useState } from "react";

function SignUp() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var usr = userCredential.user;
        console.log(usr);
        setUser(usr);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(`${errorCode} ${errorMessage}`);
      });
  };

  return (
    <>
      <Form className="container" onSubmit={createUser}>
        <h2> {user && "SignedUp"} </h2>
        <h1>SignUp</h1>
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
        <Button variant="success" type="submit">
          SignUp
        </Button>
      </Form>
      <hr />
    </>
  );
}

export default SignUp;
