import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { boxSizing } from "@mui/system";
import MyAvatarSource from "./assets/images/me.png";

const boxStyle = {
  height: "553px",
  background: "rgba(41, 84, 163, 0.05)",
  borderWidth: "4px 0px",
  borderStyle: "solid",
  borderColor: "rgba(224, 224, 255, 0.5)",
  borderRadius: "66px",
  padding: "30px",
};

function Portfolio() {
  return (
    <Box m={5}>
      <Grid container>
        <Grid item lg={1}></Grid>
        <Grid item lg={10}>
          <Stack spacing={2}>
            <Grid container>
              <Grid item lg={3}>
                <Typography
                  style={{
                    fontWeight: "500",
                    fontSize: "24px",
                    lineHeight: "50px",
                    letterSpacing: "0.03em",
                    color: "#0D253D",
                  }}
                >
                  Hello, I'm Van Phan
                </Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item lg={8}>
                <Typography
                  style={{
                    fontWeight: "800",
                    fontSize: "100px",
                    lineHeight: "116px",
                    color: "#03045E",
                  }}
                >
                  Fresher UI/UX Designer
                </Typography>
              </Grid>
              <Grid item lg={4}>
                {/* <img style={{ height: "817px" }} src={MyAvatarSource} /> */}
              </Grid>
            </Grid>

            <Box component="span" style={boxStyle}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{
                  padding: "40px",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "500",
                    fontSize: "24px",
                    lineHeight: "50px",
                    letterSpacing: "0.03em",
                    textAlign: "justify",
                    color: "#0D253D",
                  }}
                >
                  Hi, I’am Van Phan, full name is Phan Thi Cam Van - a fresher
                  of UI/UX design Industry. A passionate, creative,
                  deadline-oriented graphic designer with 1 year of experience
                  in digital media industry. Especially working on projects for
                  social media and branding. Good adaptability skills, always
                  curious about aspects of design and self-learning to be better
                  everyday. I aim for a simple, meaningful and useful design
                  style.
                </Typography>
              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="end"
                alignItems="flex-end"
              >
                <Typography
                  style={{
                    marginTop: "60px",
                    fontWeight: "800",
                    fontSize: "100px",
                    lineHeight: "116px",
                    color: "#03045E",
                  }}
                >
                  about me
                </Typography>
              </Grid>
            </Box>
          </Stack>
        </Grid>
        <Grid item lg={1}></Grid>
      </Grid>
    </Box>
  );
}

export default Portfolio;
