import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  //   const [btnText, setBtnText] = useState("Enable Dark Mode");

  //   const toggleStyle = () => {
  //       if (myStyle.color === "white") {
  //           setMyStyle({
  //               color: "black",
  //               backgroundColor: "white",
  //           });
  //           setBtnText("Enable dark Mode")
  //       }
  //       else {
  //           setMyStyle({
  //               color: "white",
  //               backgroundColor: "black",
  //           });
  //           setBtnText("Enable white Mode")
  //       }
  //   }
  return (
    <>
      <div
        className="container my-5"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#2e2d2d",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi
          deleniti quod, minus dolorum ratione nihil vel placeat excepturi
          saepe, vitae cumque fugit eum aliquid et molestias tenetur nulla quia
          dolores quae. Maxime magnam, nisi eum expedita, nam alias obcaecati
          corporis et illum ab iste ad, suscipit repellat similique vero
          inventore quod deserunt. Quidem vitae, obcaecati commodi perspiciatis
          provident ratione tempore? Voluptatum cumque at ab dicta, quia
          aspernatur nesciunt ratione porro assumenda accusantium culpa, enim,
          eligendi tempore non illum molestiae itaque quibusdam ut harum. Quasi
          voluptate tenetur, modi, aliquid natus quia dolorum recusandae
          possimus iste, blanditiis porro autem sapiente facilis voluptas
          quibusdam atque optio veniam beatae cupiditate qui! Quidem quia
          aliquid necessitatibus ratione quos eveniet sit eaque at, rerum
          incidunt, rem aspernatur sunt assumenda vero, explicabo expedita
          similique quis maiores excepturi tenetur laudantium dicta consequatur?
          Quae quos explicabo veniam totam illum voluptatum commodi est et
          cumque maxime quibusdam voluptatibus, corporis mollitia incidunt odit
          iure provident eos voluptates doloremque ratione quam quod?
          Perspiciatis, earum voluptas? Amet labore eos distinctio incidunt
          blanditiis beatae! Quidem tempore architecto a molestiae quod, ipsum
          consectetur facere sapiente accusantium. Magni enim aspernatur
          voluptate? Reiciendis, labore fugit! Incidunt sapiente optio iste
          soluta veniam molestias eveniet quaerat eum minus?
        </p>
      </div>
      {/* <div className ="btn">
          <button onClick={toggleStyle} type="button" className="btn btn-primary">
            {btnText}
          </button>
        </div> */}
    </>
  );
}
