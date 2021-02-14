import styles from "./jobCard.module.scss";
function JobCard({ job }) {
  return (
    <article className={styles.jobCard} data-testid={job.id}>
      <header className={styles.jobHeader}>
        <img
          data-testid="companyLogo"
          src={job.company.logoUrl || "//via.placeholder.com/80x80"}
          height={80}
          width={80}
          alt=""
        ></img>
        <div>
          <h2 data-testid="title">{job.title}</h2>
          <h3 data-testid="company">{job.company.name}</h3>
        </div>
      </header>
      <section className={styles.meta}>
        <div className={styles.metaInfo}>
          <span>Country:</span>
          <span data-testid="country">
            {job.countries && job.countries.length
              ? job.countries.map((country) => country.name).join(", ")
              : "NA"}
          </span>
        </div>
        <div className={styles.metaInfo}>
          <span>City:</span>
          <span data-testid="city">
            {job.cities && job.cities.length
              ? job.cities.map((city) => city.name).join(", ")
              : "NA"}
          </span>
        </div>
        <div className={styles.metaInfo}>
          <span>Offers Remote:</span>
          <span data-testid="isRemote">
            {job.remotes && job.remotes.length ? "Yes" : "No"}
          </span>
        </div>
      </section>
    </article>
  );
}
export default JobCard;
