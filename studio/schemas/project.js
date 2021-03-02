export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "projectImage",
      title: "Project image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "text",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "drawingType",
      title: "Drawing type",
      type: "string",
      options: {
        list: [
          { value: "pastel", title: "Pastel" },
          { value: "charcoal", title: "Charcoal" },
          { value: "colored pencil", title: "Colored pencil" },
          { value: "conte", title: "Conte" },
          { value: "crayon", title: "Crayon" },
          { value: "graphite", title: "Graphite" },
          { value: "marker", title: "Marker" },
          { value: "pencil", title: "Pencil" },
          { value: "pen&ink", title: "Pen & ink" },
          { value: "other", title: "other" },
        ],
      },
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
};
