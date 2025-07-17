"use client";
import { SchematicEmbed as SchematicEmbedComponent } from "@schematichq/schematic-components";

function SchematicEmbed({
  componentId,
  accessToken,
}: {
  componentId: string;
  accessToken: string;
}) {
  return (
    <SchematicEmbedComponent
      accessToken={accessToken}
      id={componentId}
    ></SchematicEmbedComponent>
  );
}

export default SchematicEmbed;
