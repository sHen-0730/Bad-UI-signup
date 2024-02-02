<template>
  <b-div rounded margin="t-5" position="relative" style="
      height: 280px;
      background-color:#f5f5dc;">
      <b-div rounded="top" position="absolute"
      style="
      width: 100%;
      height: 60px;
      background-color:#66cdaa;">
      <b-p margin="t-3" padding="s-3" position="absolute" text-color="light">あなたをサポートします</b-p>
    <Grid margin="t-5" style="text-align: center;">
      <b-div>
    <b-button padding="x-5" margin="t-5" button="success" toggle="modal" target="#exampleModalCenter" >
      ヒント
    </b-button>
      </b-div>
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
    <b-button
    button="success"
    margin="t-5"
    toggle="toast"
    target="#liveToast"
  >
    パスワードを設定
  </b-button>

  <b-div margin="t-5"
        position="absolute"
        :bottom="0"
        :start="50"
        translate="middle-x"
  >
    <Toast id="liveToast">
      <ToastHeader>
        <strong class="me-auto">Bootstrap</strong>
        <CloseButton dismiss="toast" />
      </ToastHeader>
      <ToastBody padding="y-3">申し訳ございません。現在この機能は使用することができません。</ToastBody>
    </Toast>
  </b-div>
</Grid>
    </b-div>
  </b-div>
</template>