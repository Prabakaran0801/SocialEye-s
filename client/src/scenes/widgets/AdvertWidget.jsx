import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://socialeyes-fnee.onrender.com/assets/Internet-Vector-Illustration.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>ADD Title</Typography>
        <Typography color={medium}>ADD Link</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Mauris ac congue neque, vitae viverra orci. Nunc consectetur dolor a
        diam volutpat, nec scelerisque nulla vulputate. Donec vitae faucibus
        tortor, vitae hendrerit odio.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
