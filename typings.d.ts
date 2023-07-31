export type User = {
  createdAt: Date;
  name: String;
  avatar: Image;
  email: String;
  bio: String;
  id: String;
};

export type Track = {
  createdAt: Date;
  name: String;
  fileUrl: String;
  userId: String;
  projectId: String;
  bitrate: Number;
  id: String;
};

//   "metadata": {
//     "type": "object",
//     "description": "Additional metadata about the track, such as length, bitrate, etc.",
//     "properties": {
//       "length": {
//         "type": "number",
//         "description": "The length of the track in seconds."
//       },
//       "bitrate": {
//         "type": "number",
//         "description": "The bitrate of the track in kbps."
//       }
//       // add more metadata properties as needed
//     }
// },

type Project = {
  createdAt: Date;
  name: String;
  description: String;
  users: User[];
  tracks: Track[];
  id: String;
};
