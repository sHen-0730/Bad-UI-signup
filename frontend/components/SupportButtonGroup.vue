<template>
  <b-div rounded margin="t-5" position="relative" style="
      height: 480px;
      background-color:#f5f5dc;">
      <b-div rounded="top" position="absolute"
      style="
      width: 100%;
      height: 60px;
      background-color:#66cdaa;">
      <b-p margin="t-3" padding="s-3" position="absolute" text-color="light">あなたをサポートします</b-p>
    <b-div margin="t-5" style="text-align: center;">
    <b-button padding="x-5" margin="t-5" button="success" toggle="modal" target="#exampleModalCenter" >
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
    </b-div>
  </b-div>
</template>