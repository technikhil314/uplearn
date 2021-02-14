import styles from "./jobCard.module.scss";
function JobCard({ job }) {
  return (
    <article className={styles.jobCard}>
      <header className={styles.jobHeader}>
        <img
          src={job.company.logoUrl || "//via.placeholder.com/80x80"}
          height={80}
          width={80}
          alt=""
        ></img>
        <div>
          <h2>{job.title}</h2>
          <h3>{job.company.name}</h3>
        </div>
      </header>
      <section className={styles.meta}>
        <div className={styles.metaInfo}>
          <span>Country:</span>
          <span>
            {job.countries && job.countries.length
              ? job.countries.map((country) => country.name).join(",")
              : "NA"}
          </span>
        </div>
        <div className={styles.metaInfo}>
          <span>City:</span>
          <span>
            {job.cities && job.cities.length
              ? job.cities.map((city) => city.name).join(",")
              : "NA"}
          </span>
        </div>
        <div className={styles.metaInfo}>
          <span>Offers Remote:</span>
          <span>{job.remotes ? "Yes" : "No"}</span>
        </div>
      </section>
    </article>
  );
}
export default JobCard;
