export const ColorfulMessage = (props) => {
    const contentStyleA = {
        color: props.color,
        fontSize: "18px",
        margin: 100
      };
      
        return <p style={contentStyleA}>{props.message}</p>
};