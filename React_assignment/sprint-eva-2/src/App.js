import {
  Routes,
  Route,
  Outlet,
  useParams,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="email" element={<Emails />}>
        <Route path=":emailId" element={<Email />} />
        <Route path="sent" element={<SentEmail />} />
      </Route>
    </Routes>
  );
}

function Emails() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Emails</h1>
      <button onClick={() => navigate("/email/1")}>
        Go to Email with ID 1
      </button>
      <button onClick={() => navigate("/email/send")}>Go to send Email</button>
      <Outlet />
    </div>
  );
}

function Email() {
  let { emailId } = useParams();
  return <h1>Email {emailId}</h1>;
}

function SentEmail() {
  return <h1>Sent Email</h1>;
}

export default App;