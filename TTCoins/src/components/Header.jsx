function Header({
  title,
  rightIcon,
  onRightClick
}) {

  return (

    <div
      style={{
        height: 60,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
        zIndex: 99,
        borderBottom: "1px solid #ececec"
      }}
    >

      {/* TITLE */}

      <div
        style={{
          fontSize: 24,
          fontWeight: "700",
          color: "#111"
        }}
      >
        {title}
      </div>

      {/* RIGHT ICON */}

      {rightIcon && (

        <div
          onClick={onRightClick}
          style={{
            position: "absolute",
            right: 18,
            fontSize: 28,
            cursor: "pointer",
            color: "#111"
          }}
        >
          {rightIcon}
        </div>

      )}

    </div>

  );

}

export default Header;