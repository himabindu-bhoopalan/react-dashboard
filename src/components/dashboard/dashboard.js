import React from "react";
import { Divider } from "@material-ui/core";
import { AccessTimeOutlined } from "@material-ui/icons";
import { BarChartOutlined } from "@material-ui/icons";
import { CardGiftcardOutlined } from "@material-ui/icons";
import { Dashboard } from "@material-ui/icons";
import { KeyboardArrowDownOutlined } from "@material-ui/icons";
import { LocalOfferOutlined } from "@material-ui/icons";
import { MenuOutlined } from "@material-ui/icons";
import { NotificationsNoneOutlined } from "@material-ui/icons";
import { PersonAddOutlined } from "@material-ui/icons";
import { PieChartOutlined } from "@material-ui/icons";
import { SearchOutlined } from "@material-ui/icons";
import { ShoppingBasketOutlined } from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { ListSubheader } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function DocumentRoot(props) {
  return (
    <div>
      <main
        style={{
          marginLeft: "0px",
          paddingTop: "0px",
          paddingLeft: "0px",
          paddingBottom: "0px",
          marginTop: "0px",
          marginBottom: "0px",
          paddingRight: "0px",
          marginRight: "0px",
        }}
      >
        <Hidden smDown implementation="css">
          <Drawer variant="permanent" transitionDuration={0} open anchor="left">
            <Paper
              variant="elevation"
              elevation={1}
              style={{
                backgroundColor: "#2d47fe",
                color: "#e64b4b",
                height: "100vh",
              }}
            >
              <List
                subheader={
                  <ListSubheader
                    style={{
                      fontSize: "1.5rem",
                      fontFamily: "Montserrat",
                      marginTop: "8vh",
                      color: "#ffffff",
                    }}
                  >
                    eProduct
                  </ListSubheader>
                }
              >
                <ListItem
                  button
                  style={{ backgroundColor: "#ffffff", marginTop: "5vh" }}
                >
                  <ListItemIcon style={{ color: "#2d47fe" }}>
                    <Dashboard />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary="Dashboard"
                    style={{
                      fontSize: "1rem",
                      paddingBottom: "10px",
                      paddingTop: "10px",
                      fontFamily: "Montserrat",
                      color: "#2d47fe",
                      paddingRight: "10px",
                    }}
                  />
                </ListItem>
                <ListItem
                  button
                  style={{ backgroundColor: "#2d47fe", color: "#deeffe" }}
                >
                  <ListItemIcon
                    style={{ borderRadius: "10px", color: "#ffffff" }}
                  >
                    <ShoppingCartOutlined style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary="Orders"
                    style={{
                      paddingTop: "10px",
                      fontSize: "1rem",
                      paddingBottom: "10px",
                      fontFamily: "Montserrat",
                      color: "#ffffff",
                    }}
                  />
                </ListItem>
                <ListItem
                  button
                  style={{ backgroundColor: "#2d47fe", color: "#deeffe" }}
                >
                  <ListItemIcon style={{ color: "#2d47fe" }}>
                    <PieChartOutlined style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary="Statistics"
                    style={{
                      paddingTop: "10px",
                      fontSize: "1rem",
                      paddingBottom: "10px",
                      fontFamily: "Montserrat",
                      color: "#ffffff",
                    }}
                  />
                </ListItem>
                <ListItem
                  button
                  style={{ backgroundColor: "#2d47fe", color: "#deeffe" }}
                >
                  <ListItemIcon style={{ color: "#2d47fe" }}>
                    <CardGiftcardOutlined style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary="Product"
                    style={{
                      paddingTop: "10px",
                      fontSize: "1rem",
                      paddingBottom: "10px",
                      fontFamily: "Montserrat",
                      color: "#ffffff",
                    }}
                  />
                </ListItem>
                <ListItem
                  button
                  style={{ backgroundColor: "#2d47fe", color: "#deeffe" }}
                >
                  <ListItemIcon style={{ color: "#2d47fe" }}>
                    <ShoppingBasketOutlined style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary="Stock"
                    style={{
                      paddingTop: "10px",
                      fontSize: "1rem",
                      paddingBottom: "10px",
                      fontFamily: "Montserrat",
                      color: "#ffffff",
                    }}
                  />
                </ListItem>
                <ListItem
                  button
                  dense
                  style={{ backgroundColor: "#2d47fe", color: "#deeffe" }}
                >
                  <ListItemIcon style={{ color: "#2d47fe" }}>
                    <LocalOfferOutlined style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary="Offers"
                    style={{
                      paddingTop: "10px",
                      fontSize: "1rem",
                      paddingBottom: "10px",
                      fontFamily: "Montserrat",
                      color: "#ffffff",
                    }}
                  />
                </ListItem>
              </List>
            </Paper>
          </Drawer>
        </Hidden>
        <Hidden mdUp implementation="css">
          <Drawer variant="permanent" transitionDuration={2} anchor="left">
            <Paper
              variant="elevation"
              elevation={2}
              style={{
                backgroundColor: "#2d47fe",
                width: "70px",
                height: "100%",
              }}
            >
              <IconButton
                size="medium"
                color="secondary"
                style={{ color: "#deeffe", marginTop: "7vh" }}
              >
                <MenuOutlined
                  color="secondary"
                  style={{ color: "#ffffff", backgroundColor: "#2d47fe" }}
                />
              </IconButton>
              <List disablePadding>
                <ListItem button style={{ backgroundColor: "#ffffff" }}>
                  <ListItemIcon style={{ color: "#2d47fe" }}>
                    <Dashboard />
                  </ListItemIcon>
                </ListItem>
                <ListItem
                  button
                  style={{ backgroundColor: "#2d47fe", color: "#deeffe" }}
                >
                  <ListItemIcon style={{ color: "#2d47fe" }}>
                    <ShoppingCartOutlined style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                </ListItem>
                <ListItem
                  button
                  style={{ backgroundColor: "#2d47fe", color: "#deeffe" }}
                >
                  <ListItemIcon style={{ color: "#2d47fe" }}>
                    <PieChartOutlined style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                </ListItem>
                <ListItem
                  button
                  style={{ backgroundColor: "#2d47fe", color: "#deeffe" }}
                >
                  <ListItemIcon style={{ color: "#2d47fe" }}>
                    <CardGiftcardOutlined style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                </ListItem>
                <ListItem
                  button
                  style={{ backgroundColor: "#2d47fe", color: "#deeffe" }}
                >
                  <ListItemIcon style={{ color: "#2d47fe" }}>
                    <ShoppingBasketOutlined style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                </ListItem>
                <ListItem
                  button
                  dense
                  style={{ backgroundColor: "#2d47fe", color: "#deeffe" }}
                >
                  <ListItemIcon style={{ color: "#2d47fe" }}>
                    <LocalOfferOutlined style={{ color: "#ffffff" }} />
                  </ListItemIcon>
                </ListItem>
              </List>
            </Paper>
          </Drawer>
        </Hidden>
        <Grid
          container
          style={{
            borderRadius: "10px",
            marginLeft: "0px",
            paddingTop: "0px",
            paddingLeft: "20%",
            paddingBottom: "0px",
            borderColor: "#40fad8",
            marginTop: "0px",
            borderStyle: "none",
            marginBottom: "0px",
            paddingRight: "0px",
            marginRight: "0px",
          }}
        >
          <Grid
            zeroMinWidth
            item
            sm={12}
            xs={12}
            md={8}
            style={{ borderStyle: "none" }}
          >
            <Grid
              container
              spacing={3}
              direction="column"
              style={{
                borderStyle: "none",
                marginTop: "6vh",
                borderColor: "#68f517",
              }}
            >
              <Grid
                zeroMinWidth
                item
                style={{
                  justifyContent: "space-between",
                  borderColor: "#f53535",
                  alignItems: "flex-start",
                  borderStyle: "none",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    borderStyle: "none",
                    borderColor: "#e61c1c",
                    display: "inline",
                  }}
                >
                  <Typography
                    variant="body2"
                    align="left"
                    style={{
                      fontSize: "30px",
                      fontFamily: "Montserrat",
                      color: "#404444",
                      fontWeight: "800",
                    }}
                  >
                    Hello Dhola,
                  </Typography>
                  <Typography
                    variant="body1"
                    align="left"
                    style={{
                      color: "#404444",
                      fontSize: "1rem",
                      fontFamily: "Montserrat",
                    }}
                  >
                    Welcome Back!
                  </Typography>
                </div>
                <div style={{ borderStyle: "none" }}>
                  <IconButton
                    size="medium"
                    edge="end"
                    style={{
                      backgroundColor: "#f9f9f9",
                      borderStyle: "solid",
                      borderColor: "#000000",
                    }}
                  >
                    <NotificationsNoneOutlined fontSize="small" />
                    <Badge
                      variant="dot"
                      overlap="circle"
                      color="error"
                      style={{ color: "#d0021b" }}
                    />
                  </IconButton>
                </div>
              </Grid>
              <Grid
                zeroMinWidth
                item
                style={{
                  paddingTop: "0px",
                  borderStyle: "none",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <Card
                  elevation={0}
                  variant="outlined"
                  style={{
                    width: "100%",
                    borderStyle: "solid",
                    borderColor: "rgba(155,155,155,0.16)",
                  }}
                >
                  <CardContent
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <Typography
                      variant="h6"
                      style={{ fontSize: "0.7rem", fontFamily: "Montserrat" }}
                    >
                      Sales
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{
                        color: "#eff0f0",
                        fontSize: "0.7rem",
                        fontFamily: "Montserrat",
                      }}
                    >
                      Orders
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{
                        color: "#eff0f0",
                        fontSize: "0.7rem",
                        fontFamily: "Montserrat",
                      }}
                    >
                      Preparation Time
                    </Typography>
                    <Button
                      variant="text"
                      endIcon={<KeyboardArrowDownOutlined />}
                      size="small"
                      color="default"
                      style={{
                        backgroundColor: "#f8f9f9",
                        fontSize: "0.7rem",
                        textTransform: "none",
                        fontFamily: "Montserrat",
                        marginTop: "-2px",
                      }}
                    >
                      Month
                    </Button>
                  </CardContent>
                  <CardMedia
                    image="https://images.unsplash.com/photo-1512851685250-bfa0aa982a1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    style={{
                      marginLeft: "10px",
                      marginBottom: "10px",
                      height: "200px",
                      marginRight: "10px",
                    }}
                  />
                </Card>
              </Grid>
              <Grid
                container
                justify="space-between"
                style={{ borderStyle: "none", borderColor: "#2adf21" }}
              >
                <Grid
                  zeroMinWidth
                  item
                  sm={12}
                  xs={12}
                  md={7}
                  style={{
                    paddingTop: "0px",
                    borderStyle: "none",
                    display: "flex",
                    paddingLeft: "0px",
                  }}
                >
                  <Card
                    elevation={2}
                    variant="elevation"
                    style={{
                      width: "100%",
                      borderWidth: "1px",
                      borderColor: "#252121",
                      borderStyle: "none",
                      display: "flex",
                      height: "100%",
                    }}
                  >
                    <CardMedia
                      image="https://images.unsplash.com/photo-1533135044283-42dc2b70abfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      style={{
                        width: "300px",
                        marginLeft: "10px",
                        marginTop: "10px",
                        marginBottom: "10px",
                        marginRight: "5px",
                      }}
                    />
                    <CardContent
                      style={{
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        display: "flex",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                      }}
                    >
                      <List>
                        <ListItem
                          style={{ paddingTop: "0px", paddingBottom: "0px" }}
                        >
                          <ListItemText
                            disableTypography
                            primary="Mens"
                            style={{
                              fontSize: "0.9rem",
                              fontFamily: "Montserrat",
                            }}
                          />
                        </ListItem>
                        <ListItem
                          style={{ paddingTop: "0px", paddingBottom: "0px" }}
                        >
                          <ListItemText
                            disableTypography
                            primary="Kids"
                            style={{
                              fontSize: "0.9rem",
                              fontFamily: "Montserrat",
                            }}
                          />
                        </ListItem>
                        <ListItem
                          style={{ paddingTop: "0px", paddingBottom: "0px" }}
                        >
                          <ListItemText
                            disableTypography
                            primary="Womens"
                            style={{
                              fontSize: "0.9rem",
                              fontFamily: "Montserrat",
                            }}
                          />
                        </ListItem>
                        <ListItem
                          style={{ paddingTop: "0px", paddingBottom: "0px" }}
                        >
                          <ListItemText
                            disableTypography
                            primary="Home and Furniture"
                            style={{
                              fontSize: "0.9rem",
                              fontFamily: "Montserrat",
                              fontWeight: "500",
                            }}
                          />
                        </ListItem>
                      </List>
                      <List>
                        <ListItem>
                          <ListItemText
                            disableTypography
                            primary="$400"
                            style={{
                              fontSize: "0.9rem",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              fontFamily: "Montserrat",
                              fontWeight: "600",
                            }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            disableTypography
                            primary="$500"
                            style={{
                              fontSize: "0.9rem",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              fontFamily: "Montserrat",
                              fontWeight: "600",
                            }}
                          />
                        </ListItem>
                        <ListItem
                          style={{ paddingTop: "0px", paddingBottom: "0px" }}
                        >
                          <ListItemText
                            disableTypography
                            primary="$897"
                            style={{
                              fontSize: "0.9rem",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              fontFamily: "Montserrat",
                              fontWeight: "600",
                            }}
                          />
                        </ListItem>
                        <ListItem
                          style={{ paddingTop: "0px", paddingBottom: "0px" }}
                        >
                          <ListItemText
                            disableTypography
                            primary="$5673"
                            style={{
                              fontSize: "0.9rem",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              fontFamily: "Montserrat",
                              fontWeight: "600",
                            }}
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  zeroMinWidth
                  item
                  sm={12}
                  xs={12}
                  md={4}
                  style={{
                    paddingBottom: "0px",
                    paddingTop: "0px",
                    borderStyle: "none",
                    marginBottom: "5px",
                    paddingRight: "0px",
                    paddingLeft: "0px",
                  }}
                >
                  <Card
                    elevation={0}
                    variant="outlined"
                    style={{
                      width: "100%",
                      justifyContent: "space-around",
                      borderColor: "rgba(155,155,155,0.22)",
                      borderStyle: "solid",
                      display: "flex",
                      height: "100%",
                    }}
                  >
                    <CardContent style={{ alignSelf: "center" }}>
                      <Typography
                        variant="body2"
                        style={{
                          fontSize: "1rem",
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                        }}
                      >
                        Response Rate
                      </Typography>
                      <div
                        style={{
                          fontSize: "30px",
                          fontFamily: "Montserrat",
                          fontWeight: "600",
                        }}
                      >
                        4.8
                      </div>
                      <div>Out of 5.0</div>
                    </CardContent>
                    <CardMedia
                      image="https://images.unsplash.com/photo-1530863138121-03aea5f46fd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      style={{
                        width: "150px",
                        marginTop: "10px",
                        marginBottom: "10px",
                        marginRight: "10px",
                      }}
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Hidden implementation="css" smDown>
            <Divider
              orientation="vertical"
              variant="fullWidth"
              style={{
                height: "100vh",
                minHeight: "100vh",
                marginLeft: "30px",
                paddingTop: "200px",
              }}
            />
          </Hidden>
          <Grid
            zeroMinWidth
            item
            sm={12}
            xs={12}
            md={3}
            style={{ borderStyle: "none" }}
          >
            <Grid
              container
              direction="row"
              spacing={1}
              style={{
                borderColor: "#ee1515",
                marginTop: "3vh",
                borderStyle: "none",
                paddingLeft: "10%",
              }}
            >
              <Grid
                zeroMinWidth
                item
                style={{
                  width: "100%",
                  borderColor: "#ec5757",
                  flexDirection: "row",
                  borderStyle: "none",
                  display: "flex",
                }}
              >
                <Grid
                  container
                  alignContent="center"
                  spacing={3}
                  alignItems="center"
                  justify="space-between"
                  style={{ borderStyle: "none" }}
                >
                  <Grid zeroMinWidth item>
                    <IconButton>
                      <SearchOutlined
                        fontSize="small"
                        style={{
                          backgroundColor: "#f9f9f9",
                          borderRadius: "5px",
                          paddingTop: "5px",
                          paddingBottom: "5px",
                          paddingLeft: "5px",
                          paddingRight: "5px",
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid
                    zeroMinWidth
                    item
                    style={{
                      borderStyle: "none",
                      borderColor: "#e21919",
                      display: "flex",
                    }}
                  >
                    <div style={{ marginTop: "10px" }}>
                      <img
                        alt="avatar"
                        src="https://images.unsplash.com/photo-1525735765456-7f67273a9d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        style={{ borderRadius: "10px", width: "30px" }}
                      ></img>
                    </div>
                    <IconButton size="small">
                      <KeyboardArrowDownOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                zeroMinWidth
                item
                style={{
                  marginLeft: "auto",
                  justifyContent: "center",
                  borderStyle: "none",
                  display: "flex",
                  marginRight: "auto",
                }}
              >
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1525735765456-7f67273a9d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  style={{
                    borderRadius: "20px",
                    marginLeft: "auto",
                    width: "100px",
                    marginTop: "25%",
                    borderColor: "#2d47fe",
                    borderWidth: "5px",
                    borderStyle: "none",
                    marginRight: "auto",
                  }}
                ></img>
              </Grid>
              <Grid zeroMinWidth item xs={12}>
                <Typography
                  variant="h6"
                  align="center"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                  }}
                >
                  Dhola Junny
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  style={{ fontSize: "15px", fontFamily: "Montserrat" }}
                >
                  Dhola@mail.domain
                </Typography>
              </Grid>
              <Grid zeroMinWidth item xs={12}>
                <Typography
                  variant="h6"
                  align="center"
                  display="initial"
                  style={{
                    paddingTop: "5px",
                    color: "#efa465",
                    fontWeight: "600",
                    paddingLeft: "5px",
                    paddingBottom: "5px",
                    fontSize: "0.8rem",
                    marginRight: "auto",
                    backgroundColor: "#fcefe6",
                    borderRadius: "10px",
                    marginLeft: "auto",
                    width: "50px",
                    fontFamily: "Montserrat",
                    paddingRight: "5px",
                  }}
                >
                  Level 2
                </Typography>
              </Grid>
              <Grid
                zeroMinWidth
                item
                style={{
                  display: "flex",
                  marginRight: "auto",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "10px",
                  marginLeft: "auto",
                  justifyContent: "space-around",
                  marginTop: "10px",
                  alignItems: "center",
                  borderStyle: "none",
                  paddingLeft: "10px",
                  paddingTop: "20px",
                  paddingRight: "10px",
                  paddingBottom: "20px",
                  width: "90%",
                }}
              >
                <Grid
                  container
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "Montserrat",
                      paddingLeft: "2px",
                    }}
                  >
                    145
                  </Typography>
                  <div style={{ fontSize: "0.7rem", fontFamily: "Montserrat" }}>
                    Products
                  </div>
                </Grid>
                <Grid
                  container
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "Montserrat",
                      paddingLeft: "2px",
                    }}
                  >
                    1753
                  </Typography>
                  <div style={{ fontSize: "0.7rem" }}>Orders</div>
                </Grid>
                <Grid
                  container
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "Montserrat",
                      paddingLeft: "2px",
                    }}
                  >
                    $6078
                  </Typography>
                  <div style={{ fontSize: "0.7rem", fontFamily: "Montserrat" }}>
                    Revenue
                  </div>
                </Grid>
              </Grid>
              <Grid
                zeroMinWidth
                item
                xs={10}
                style={{
                  marginTop: "3vh",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Grid
                  container
                  alignItems="flex-start"
                  direction="column"
                  style={{
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    borderStyle: "none",
                    paddingRight: "5px",
                    paddingLeft: "5px",
                  }}
                >
                  <Grid
                    zeroMinWidth
                    item
                    style={{ justifyContent: "flex-start", display: "flex" }}
                  >
                    <div>
                      <BarChartOutlined
                        fontSize="large"
                        style={{
                          backgroundColor: "#f8f9f9",
                          borderRadius: "10px",
                          paddingTop: "10px",
                          color: "#4068fe",
                          paddingLeft: "10px",
                          paddingBottom: "10px",
                          borderStyle: "none",
                          paddingRight: "10px",
                        }}
                      />
                    </div>
                    <Grid
                      container
                      style={{
                        flexDirection: "column",
                        borderStyle: "none",
                        paddingLeft: "10px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        variant="body2"
                        align="left"
                        display="initial"
                        style={{
                          fontSize: "15px",
                          fontFamily: "Montserrat",
                          borderStyle: "none",
                          fontWeight: "600",
                        }}
                      >
                        $39.84
                        <span
                          style={{
                            fontSize: "0.8rem",
                            fontFamily: "Roboto",
                            color: "#efa465",
                            fontWeight: "600",
                            paddingLeft: "4px",
                          }}
                        >
                          {" "}
                          +2.5%
                        </span>
                      </Typography>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: "500",
                          fontFamily: "Montserrat",
                        }}
                      >
                        Average weekly sales
                      </div>
                    </Grid>
                  </Grid>
                  <Grid
                    zeroMinWidth
                    item
                    style={{ justifyContent: "flex-start", display: "flex" }}
                  >
                    <div>
                      <AccessTimeOutlined
                        fontSize="large"
                        style={{
                          backgroundColor: "#f8f9f9",
                          borderRadius: "10px",
                          paddingTop: "10px",
                          color: "#4068fe",
                          paddingLeft: "10px",
                          paddingBottom: "10px",
                          borderStyle: "none",
                          paddingRight: "10px",
                        }}
                      />
                    </div>
                    <Grid
                      container
                      style={{
                        flexDirection: "column",
                        borderStyle: "none",
                        paddingLeft: "10px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        variant="body2"
                        align="left"
                        display="initial"
                        style={{
                          fontSize: "15px",
                          fontFamily: "Montserrat",
                          borderStyle: "none",
                          fontWeight: "600",
                        }}
                      >
                        19 mins
                        <span
                          style={{
                            fontSize: "12px",
                            fontFamily: "Montserrat",
                            color: "#efa465",
                            fontWeight: "600",
                            paddingLeft: "4px",
                          }}
                        >
                          {" "}
                          +4.8%
                        </span>
                      </Typography>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: "500",
                          fontFamily: "Montserrat",
                        }}
                      >
                        Average order
                      </div>
                    </Grid>
                  </Grid>
                  <Grid
                    zeroMinWidth
                    item
                    style={{
                      borderColor: "#eb2d2d",
                      fontFamily: "Montserrat",
                      justifyContent: "flex-start",
                      display: "flex",
                    }}
                  >
                    <div>
                      <PersonAddOutlined
                        fontSize="large"
                        style={{
                          backgroundColor: "#f8f9f9",
                          borderRadius: "10px",
                          paddingTop: "10px",
                          color: "#4068fe",
                          paddingLeft: "10px",
                          paddingBottom: "10px",
                          borderStyle: "none",
                          paddingRight: "10px",
                        }}
                      />
                    </div>
                    <Grid
                      container
                      style={{
                        flexDirection: "column",
                        borderStyle: "none",
                        paddingLeft: "10px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        variant="h6"
                        align="left"
                        style={{
                          fontSize: "15px",
                          fontFamily: "Montserrat",
                          borderStyle: "none",
                          fontWeight: "600",
                        }}
                      >
                        25
                        <span
                          style={{
                            fontSize: "0.8rem",
                            fontFamily: "Roboto",
                            color: "#efa465",
                            fontWeight: "600",
                            paddingLeft: "4px",
                          }}
                        >
                          {" "}
                          +1.7%
                        </span>
                      </Typography>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: "500",
                          fontFamily: "Montserrat",
                        }}
                      >
                        New customers
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
export default DocumentRoot