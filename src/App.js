import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

function App() {
    return (
        <div className="App">
            <CssBaseline>
                <Container maxWidth="lg">
                    <Navbar />
                </Container>
                
            </CssBaseline>
        </div>
    );
}

export default App;
