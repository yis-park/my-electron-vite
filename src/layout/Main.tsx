import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Typography,
  styled,
} from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DrawRoundedIcon from "@mui/icons-material/DrawRounded";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../components/Layout";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Main() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [favorite, setFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };

  const [expanded2, setExpanded2] = useState(false);

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const [favorite2, setFavorite2] = useState(false);

  const handleFavoriteClick2 = () => {
    setFavorite2((prevFavorite2) => !prevFavorite2);
  };

  return (
    <DashboardLayout>
      <main style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              width: "auto",
              float: "right",
              margin: "10px",
            }}
            onClick={() => navigate("/dashboard/upload")}
          >
            게시글 올리기 <DrawRoundedIcon />
          </Button>
        </div>
        <Card sx={{ maxWidth: 350, margin: "60px auto" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="업로드된 게시글"
            subheader="September 14, 2024"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://picsum.photos/200/300"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              국회의원은 법률이 정하는 직을 겸할 수 없다. 대통령의 선거에 관한
              사항은 법률로 정한다. 제1항의 해임건의는 국회재적의원 3분의 1
              이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              sx={{ width: "auto" }}
              onClick={handleFavoriteClick}
            >
              <FavoriteIcon sx={{ color: favorite ? "red" : "inherit" }} />
            </IconButton>
            <IconButton aria-label="share" sx={{ width: "auto" }}>
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{ width: "auto" }}
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을
                관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다.
                대통령의 임기는 5년으로 하며, 중임할 수 없다.
              </Typography>
              <Typography paragraph>
                헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한
                절차, 내부규율과 사무처리에 관한 규칙을 제정할 수 있다. 대통령은
                조약을 체결·비준하고, 외교사절을 신임·접수 또는 파견하며,
                선전포고와 강화를 한다. 모든 국민의 재산권은 보장된다. 그 내용과
                한계는 법률로 정한다. 헌법개정은 국회재적의원 과반수 또는
                대통령의 발의로 제안된다.
              </Typography>
              <Typography paragraph>
                신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은
                법률이 정하는 바에 의하여 국가의 보호를 받는다. 비상계엄하의
                군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와
                초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에
                한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는
                그러하지 아니하다.
              </Typography>
              <Typography>
                체포 또는 구속을 당한 자의 가족등 법률이 정하는 자에게는 그
                이유와 일시·장소가 지체없이 통지되어야 한다.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ maxWidth: 350, margin: "0 auto 20px" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="한글입숨 게시글"
            subheader="October 15, 2022"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://picsum.photos/200/300?grayscale"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              정당은 그 목적·조직과 활동이 민주적이어야 하며, 국민의 정치적
              의사형성에 참여하는데 필요한 조직을 가져야 한다.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              sx={{ width: "auto" }}
              onClick={handleFavoriteClick2}
            >
              <FavoriteIcon sx={{ color: favorite2 ? "red" : "inherit" }} />
            </IconButton>
            <IconButton aria-label="share" sx={{ width: "auto" }}>
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded2}
              onClick={handleExpandClick2}
              aria-expanded={expanded2}
              aria-label="show more"
              sx={{ width: "auto" }}
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded2} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                대통령은 국가의 원수이며, 외국에 대하여 국가를 대표한다. 모든
                국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를
                가진다.
              </Typography>
              <Typography paragraph>
                위원은 정당에 가입하거나 정치에 관여할 수 없다. 국가는 건전한
                소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한
                소비자보호운동을 법률이 정하는 바에 의하여 보장한다. 재의의
                요구가 있을 때에는 국회는 재의에 붙이고, 재적의원과반수의 출석과
                출석의원 3분의 2 이상의 찬성으로 전과 같은 의결을 하면 그
                법률안은 법률로서 확정된다.
              </Typography>
              <Typography paragraph>
                각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로
                정한다. 타인의 범죄행위로 인하여 생명·신체에 대한 피해를 받은
                국민은 법률이 정하는 바에 의하여 국가로부터 구조를 받을 수 있다.
                외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다.
                혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고
                유지되어야 하며, 국가는 이를 보장한다.
              </Typography>
              <Typography>
                재판의 심리와 판결은 공개한다. 다만, 심리는 국가의 안전보장 또는
                안녕질서를 방해하거나 선량한 풍속을 해할 염려가 있을 때에는
                법원의 결정으로 공개하지 아니할 수 있다.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </main>
    </DashboardLayout>
  );
}

export default Main;
