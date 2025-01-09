import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CardImage({
  title,
  src,
  maxWidth,
  height,
  description,
}: {
  src: string;
  maxWidth: number;
  height: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <Card raised={true} component="div" sx={{ maxWidth }}>
      <CardMedia sx={{ height }} image={src} />
      {title ||
        (description && (
          <>
            <CardContent>
              {title && (
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
              )}
              {description && (
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {description}
                </Typography>
              )}
            </CardContent>
          </>
        ))}
    </Card>
  );
}
