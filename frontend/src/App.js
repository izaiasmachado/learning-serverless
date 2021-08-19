import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import Card from "./components/Card";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "20px",
  },

  gridItems: {},

  profile: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
  },

  profilePic: {
    width: "125px",
    height: "125px",
    marginRight: "10px",
    backgroundColor: "blue",
  },

  textBox: {
    display: "flex",
    display: "block",
    width: "100%",
    height: "100px",
    alignItems: "center",
  },

  name: {
    fontSize: "25px",
    fontWeight: "bold",
  },

  description: {
    fontSize: "18px",
  },

  noItems: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  editAndAddButtons: {
    float: "right",
    marginTop: "20px",
  },
}));

function App() {
  const [user, setUser] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEditActive, setEditActive] = useState(false);

  useEffect(() => {
    async function getItems() {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/user`);
      const data = response.data;
      console.log(data);
      setUser(data);
    }
    getItems();
  }, []);

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.container}>
        <div className={classes.profile}>
          <img src={user.imageUrl} className={classes.profilePic} />

          <div className={classes.textBox}>
            <span className={classes.name}>{user.name}</span>
            <br />
            <span className={classes.description}>{user.description}</span>
          </div>
        </div>

        <Grid container spacing={3}>
          {user.items ? (
            <>
              {user.items.map((item) => {
                return (
                  <Grid item xs={12}>
                    <Card title={item.title} link={item.link}></Card>

                    {
                      (isEditActive) ? 'Botao de Deletar Aqui' : ''
                    }
                  </Grid>
                );
              })}
            </>
          ) : (
            <Grid item xs={12}>
              <h1 className={classes.noItems}>Sem Itens por aqui :/</h1>
            </Grid>
          )}
        </Grid>

        {isModalVisible ? (
          <h1 className={classes.noItems}>Modal aqui</h1>
        ) : (
          <> </>
        )}

        <div className={classes.editAndAddButtons}>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => {
              setModalVisible(!isModalVisible);
            }}
          >
            <AddIcon />
          </Fab>
          <Fab
            color="secondary"
            aria-label="edit"
            onClick={() => {
              setEditActive(!isEditActive);
            }}
          >
            <EditIcon />
          </Fab>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
