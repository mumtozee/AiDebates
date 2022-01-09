import styles from "./Argument.module.css"

const Argument = (props) => {
  return (
    <>
      <div className="row mb-2">
        <div className="col">
          <div className="card">
            <div className="card-body" id={styles.card_body}>
              <p>
                It is a long established fact that a reader will be
                distracted by the readable content of a page when looking
                at its layout. The point of using Lorem Ipsum is that it has
                a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search for
                'lorem ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div className="card-footer d-flex justify-content-around align-items-center">
              <p><em className="text-primary">user234</em>, 02.05.2018</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Argument;
