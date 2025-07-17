"use client";
import {
  SchematicEmbed as SchematicEmbedComponent,
  EmbedProvider,
} from "@schematichq/schematic-components";

function SchematicEmbed({
  componentId,
  accessToken,
}: {
  componentId: string;
  accessToken: string;
}) {
  return (
    <EmbedProvider>
      <SchematicEmbedComponent
        accessToken={accessToken}
        id={componentId}
      ></SchematicEmbedComponent>
    </EmbedProvider>
  );
}

export default SchematicEmbed;
