import SchematicComponent from "@/components/schematic/SchematicComponent";

function ManagePlan() {
  return (
    <SchematicComponent
      componentId={process.env.NEXT_PUBLIC_SCHEMATIC_COMPONENT_ID!}
    />
  );
}

export default ManagePlan;
