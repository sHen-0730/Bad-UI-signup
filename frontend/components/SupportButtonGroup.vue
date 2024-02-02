<template>
  <b-div rounded margin="t-5" style="
      height: 480px;
      background-color:seagreen;">
    <b-button button="primary" toggle="modal" target="#exampleModalCenter" >
      Hint
    </b-button>
    <Modal 
    id="exampleModalCenter"
    margin="t-5"
    backdrop="static">
      <ModalDialog centered>
        <ModalContent>
          <CloseButton dismiss="modal" margin="4" />
          <ModalBody>
            <b-div padding="y-5" text-alignment="center">
              <Spinner />
              <b-p padding="y-5">ヒントを読み込んでいます...</b-p> 
            </b-div>
          </ModalBody>
        </ModalContent>
      </ModalDialog>
    </Modal>

  </b-div>
</template>