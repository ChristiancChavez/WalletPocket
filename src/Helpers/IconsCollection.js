const IconsCollection = () => (
  <svg
    style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <symbol id="icon-profile" viewBox="0 0 32 32">
        <path d="M27 0h-24c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM26 28h-22v-24h22v24zM8 18h14v2h-14zM8 22h14v2h-14zM10 9c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3zM15 12h-4c-1.65 0-3 0.9-3 2v2h10v-2c0-1.1-1.35-2-3-2z"></path>
      </symbol>
      <symbol id="icon-cross" viewBox="0 0 32 32">
        <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
      </symbol>
      <symbol id="icon-wallet" viewBox="0 0 20 20">
        <path d="M16 6h-12.5v-0.5l11-0.88v0.88h1.5v-1.5c0-1.1-0.891-1.872-1.979-1.717l-10.041 1.434c-1.089 0.156-1.98 1.183-1.98 2.283v10c0 1.104 0.895 2 2 2h12c1.104 0 2-0.896 2-2v-8c0-1.104-0.896-2-2-2zM14.5 13.006c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5z"></path>
      </symbol>
      <symbol id="icon-medical_services" viewBox="0 0 24 24">
        <path d="M20.016 6h-4.031v-2.016q0-0.797-0.586-1.383t-1.383-0.586h-4.031q-0.797 0-1.383 0.586t-0.586 1.383v2.016h-4.031q-0.797 0-1.383 0.586t-0.586 1.43v12q0 0.797 0.586 1.383t1.383 0.586h16.031q0.797 0 1.383-0.586t0.586-1.383v-12q0-0.844-0.586-1.43t-1.383-0.586zM9.984 3.984h4.031v2.016h-4.031v-2.016zM15.984 15h-3v3h-1.969v-3h-3v-2.016h3v-3h1.969v3h3v2.016z"></path>
      </symbol>
      <symbol id="icon-airplane" viewBox="0 0 32 32">
        <path d="M24 19.999l-5.713-5.713 13.713-10.286-4-4-17.141 6.858-5.397-5.397c-1.556-1.556-3.728-1.928-4.828-0.828s-0.727 3.273 0.828 4.828l5.396 5.396-6.858 17.143 4 4 10.287-13.715 5.713 5.713v7.999h4l2-6 6-2v-4l-7.999 0z"></path>
      </symbol>
      <symbol id="icon-home" viewBox="0 0 32 32">
        <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
      </symbol>
      <symbol id="icon-spoon-knife" viewBox="0 0 32 32">
        <path d="M7 0c-3.314 0-6 3.134-6 7 0 3.31 1.969 6.083 4.616 6.812l-0.993 16.191c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.993-16.191c2.646-0.729 4.616-3.502 4.616-6.812 0-3.866-2.686-7-6-7zM27.167 0l-1.667 10h-1.25l-0.833-10h-0.833l-0.833 10h-1.25l-1.667-10h-0.833v13c0 0.552 0.448 1 1 1h2.604l-0.982 16.004c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.982-16.004h2.604c0.552 0 1-0.448 1-1v-13h-0.833z"></path>
      </symbol>
      <symbol id="icon-glass2" viewBox="0 0 32 32">
        <path d="M27.786 5.618c0.236-0.301 0.28-0.711 0.113-1.055s-0.517-0.563-0.899-0.563h-22c-0.383 0-0.732 0.219-0.899 0.563s-0.123 0.754 0.113 1.055l9.786 12.455v11.927h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h10c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3v-11.927l9.786-12.455zM24.943 6l-3.143 4h-11.599l-3.143-4h17.885z"></path>
      </symbol>
      <symbol id="icon-coin-dollar" viewBox="0 0 32 32">
        <path d="M15 2c-8.284 0-15 6.716-15 15s6.716 15 15 15c8.284 0 15-6.716 15-15s-6.716-15-15-15zM15 29c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12zM16 16v-4h4v-2h-4v-2h-2v2h-4v8h4v4h-4v2h4v2h2v-2h4l-0-8h-4zM14 16h-2v-4h2v4zM18 22h-2v-4h2v4z"></path>
      </symbol>
      <symbol id="icon-checkmark" viewBox="0 0 32 32">
        <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
      </symbol>
      <symbol id="icon-menu2" viewBox="0 0 44 32">
        <path d="M0 6h28v6h-28v-6zM0 14h28v6h-28v-6zM0 22h28v6h-28v-6z"></path>
        <path d="M31 18l6 6 6-6z"></path>
        <path d="M43 16l-6-6-6 6z"></path>
      </symbol>
      <symbol id="icon-plus" viewBox="0 0 32 32">
        <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
      </symbol>
      <symbol id="icon-bin2" viewBox="0 0 32 32">
        <path d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z"></path>
      </symbol>
      <symbol id="icon-cog" viewBox="0 0 32 32">
        <path d="M29.181 19.070c-1.679-2.908-0.669-6.634 2.255-8.328l-3.145-5.447c-0.898 0.527-1.943 0.829-3.058 0.829-3.361 0-6.085-2.742-6.085-6.125h-6.289c0.008 1.044-0.252 2.103-0.811 3.070-1.679 2.908-5.411 3.897-8.339 2.211l-3.144 5.447c0.905 0.515 1.689 1.268 2.246 2.234 1.676 2.903 0.672 6.623-2.241 8.319l3.145 5.447c0.895-0.522 1.935-0.82 3.044-0.82 3.35 0 6.067 2.725 6.084 6.092h6.289c-0.003-1.034 0.259-2.080 0.811-3.038 1.676-2.903 5.399-3.894 8.325-2.219l3.145-5.447c-0.899-0.515-1.678-1.266-2.232-2.226zM16 22.479c-3.578 0-6.479-2.901-6.479-6.479s2.901-6.479 6.479-6.479c3.578 0 6.479 2.901 6.479 6.479s-2.901 6.479-6.479 6.479z"></path>
      </symbol>
      <symbol id="icon-user-plus" viewBox="0 0 32 32">
        <path d="M12 23c0-4.726 2.996-8.765 7.189-10.319 0.509-1.142 0.811-2.411 0.811-3.681 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h12.416c-0.271-0.954-0.416-1.96-0.416-3z"></path>
        <path d="M23 14c-4.971 0-9 4.029-9 9s4.029 9 9 9c4.971 0 9-4.029 9-9s-4.029-9-9-9zM28 24h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"></path>
      </symbol>
      <symbol id="icon-menu" viewBox="0 0 32 32">
        <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
      </symbol>
    </defs>
  </svg>
);

export default IconsCollection;
