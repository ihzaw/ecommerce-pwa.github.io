export const Wifi = ({ variant }) => {
  return (
    <svg
      className={variant === "white" ? "fill-white" : "fill-black"}
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill={variant === "white" ? "#fffff" : "#00000"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.30043 2.69637C10.5348 2.69647 12.6838 3.55502 14.3032 5.09458C14.4251 5.21344 14.62 5.21194 14.7401 5.09122L15.9058 3.9148C15.9666 3.85357 16.0005 3.77063 16 3.68434C15.9995 3.59804 15.9646 3.5155 15.9031 3.45499C11.6528 -0.618318 4.9474 -0.618318 0.697078 3.45499C0.635507 3.51546 0.600578 3.59797 0.600013 3.68427C0.599439 3.77056 0.633289 3.85353 0.694053 3.9148L1.86006 5.09122C1.98007 5.21212 2.17514 5.21362 2.29701 5.09458C3.91658 3.55492 6.0658 2.69636 8.30043 2.69637ZM8.30043 6.52376C9.5281 6.52368 10.7119 6.97999 11.622 7.80403C11.745 7.92098 11.9389 7.91845 12.0589 7.79832L13.2232 6.6219C13.2845 6.5602 13.3186 6.47649 13.3177 6.3895C13.3168 6.30251 13.2811 6.21951 13.2185 6.15907C10.4474 3.58132 6.15585 3.58132 3.38469 6.15907C3.32209 6.21951 3.28638 6.30256 3.28556 6.38957C3.28473 6.47658 3.31888 6.56029 3.38032 6.6219L4.5443 7.79832C4.66428 7.91845 4.85817 7.92098 4.98125 7.80403C5.89066 6.98054 7.07357 6.52426 8.30043 6.52376ZM10.538 9.33136C10.6002 9.27024 10.6345 9.18614 10.6327 9.09892C10.631 9.01169 10.5933 8.92906 10.5286 8.87054C9.24233 7.78264 7.35852 7.78264 6.07229 8.87054C6.00754 8.92901 5.96978 9.01161 5.96793 9.09884C5.96608 9.18607 6.00032 9.2702 6.06254 9.33136L8.07691 11.3639C8.13595 11.4236 8.21643 11.4572 8.30043 11.4572C8.38442 11.4572 8.4649 11.4236 8.52394 11.3639L10.538 9.33136Z"
        fill={variant === "white" ? "#fffff" : "#00000"}
      />
    </svg>
  );
};