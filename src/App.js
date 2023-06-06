import "./app.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddFriend from "./pages/AddFriend";
import Notification from "./pages/Notification";
import Setting from "./pages/Setting";
import AddPost from "./pages/AddPost";
import EditProfile from "./pages/EditProfile";
import AddComment from "./pages/AddComment";
import Signup from "./login/Signup";
import AddProfile from "./pages/AddProfile";
import DeleteProfile from "./pages/DeleteProfile";
import AddF1 from "./pages/AddF1";
import AddF2 from "./pages/AddF2";
import AddF3 from "./pages/AddF3";

import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
    
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={<Login />}
                    />
                    <Route
                        path="/home"
                        element={<Home/>} 
                    />
                    <Route path="/addfriend" element={<AddFriend />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/addpost" element={<AddPost />} />
                    <Route path="/edit" element={<EditProfile />} />
                    <Route path="/comment" element={<AddComment />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/addprofile" element={<AddProfile/>} />
                    <Route path="/deleteprofile" element={<DeleteProfile/>} />
                    <Route path="/addf1" element={<AddF1/>} />
                    <Route path="/addf2" element={<AddF2/>} />
                    <Route path="/addf3" element={<AddF3/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;