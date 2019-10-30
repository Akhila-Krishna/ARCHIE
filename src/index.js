import React from "react";
import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
  "https://media.architecturaldigest.com/photos/56ba787ca254b168296a8fff/4:3/w_768/zaha-hadid-architecture-01.jpg",
  "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2013/08/1673188-poster-1280-zaha.jpg",
  "https://images.squarespace-cdn.com/content/v1/58c43562a5790aa56a886623/1559386260697-EZHFZVM67OBKXK2Q3ZFG/ke17ZwdGBToddI8pDm48kInU2uhB6sUNzfUBYP40q4AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcoravjv0RwKmy5HHCraM7y0iVYJnU-pc-BSbJTq8tG3_4g0CGRB5FBMWLE5wezWed/Archisoup-zaha-hadid-Heydar+Aliyev+Center.jpg",
  "http://cdn.cnn.com/cnnnext/dam/assets/171103151042-zaha-hadid-book-1.jpg",
  "https://d3sux4fmh2nu8u.cloudfront.net/Pictures/2000x2000fit/7/0/7/1848707_heydaraliyevcentrealamym0kncx_934065.jpg"
];

function App() {
  const [index, setIndex] = React.useState(0);

  return (
    <Gallery
      style={{
        background: "black",
        height: "100vh",
        width: "100vw"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
