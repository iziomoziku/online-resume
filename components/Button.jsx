const Button = (props) => {
  return (
    <div>
      <button className="button">{props.value}</button>
      <style jsx>{`
        .button {
          background-color: #49b9f0;
          border: 2px solid #dcdee5;
          padding: 0.5em;
          font-weight: 600;
          font-size: clamp(1rem, 2vh, 6rem);
        }
        .button:hover {
          background-color: inherit;
          border: 2px solid #49b9f0;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Button;
