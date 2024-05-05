import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IGiftCard } from "../redux/giftCard/model/types";
import { Divider, Stack } from "@mui/material";
import { formatDate } from "../helpers";

interface IGiftCardProps {
  card: IGiftCard;
}

export default function GiftCard({ card }: IGiftCardProps) {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {card.denomination}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {card.name}
          </Typography>
        </CardContent>

        <Divider
          style={{ margin: "0 0.25rem" }}
          color="text.secondary"
          flexItem
        />

        <Stack
          direction="row"
          divider={
            <Divider
              orientation="vertical"
              style={{ margin: "0.25rem 0" }}
              color="text.secondary"
              flexItem
            />
          }
          spacing={2}
          pl={2}
          pb={1}
        >
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            width="70%"
          >
            valid until {formatDate(card.expiration_date)}
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {card.remaining_quantity} items
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
}
