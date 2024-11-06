import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {
  const { data: countries } = useSWR(
    "https://restcountries.com/v2/all",
    fetcher
  );

  return (
    <div className="grid grid-cols-12 gap-2">
      {countries &&
        countries.map((country, idx) => (
          <img key={idx} src={country.flags.png} width={100} />
        ))}
    </div>
  );
};
export default Swr;
