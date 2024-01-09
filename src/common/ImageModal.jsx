const ImageModal = ({ size = '', modalData = '', title = '', imageUrl = '', altText = '', children }) => {
    const { showModal, setShowModal } = modalData;
    const closeModal = () => { setShowModal(false) };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex={-1} onClick={closeModal}>
                    <div className={`modal-dialog modal-dialog-centered ${size !== '' ? size : ''}`} onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            {/* Hide modal header */}
                            {/* <div className="modal-header bg-secondary text-light py-1">
                                <h5 className="modal-title">{title !== '' ? title : 'Empty Title'}</h5>
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close" />
                            </div> */}
                            {/* Modal body */}
                            <div className="modal-body p-0">
                                {/* Display image */}
                                <img src={imageUrl} alt={altText} style={{ width: '100%', height: 'auto', maxHeight: 'calc(100vh - 200px)' }} />
                                {/* Additional content */}
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                {showModal && <div className="modal-backdrop fade show" onClick={closeModal} />}
            </div>
        </>
    );
};

export default ImageModal;
