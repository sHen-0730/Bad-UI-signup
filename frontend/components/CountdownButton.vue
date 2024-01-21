<template>
<div>
  <p class="text-center" style="color: #FFE455;">制限時間を確認する</p>
  <b-button 
    button="light"
    toggle="modal"
    target="#staticBackdropLive"
  >
<img src="@/assets/logo.jpg">
  </b-button>
  <Modal
    id="staticBackdropLive"
    backdrop="static"
    :keyboard="false"
  >
    <ModalDialog scrollable>
      <ModalContent>
        <ModalHeader>
          <CountdownTimer />
          <CloseButton disabled class="me-3" />
        </ModalHeader>
        <ModalBody>
          <p class="lh-lg fs-5">
            制限時間を設ける理由は、会話の質を保ちつつ、ユーザーが特定のトピックに集中できるようにするためです。また、ユーザーが長時間同じ会話に囚われることなく、新しい会話やアクティビティに移行できるようにするためでもあります。制限時間は、
            ユーザーが時間を有効に使い、生産的なやり取りを促進するための一つの方法です。<br />
            ユーザーインターフェース（UI）は、ユーザーがテクノロジーと対話するための重要な接点です。
            直感的で使いやすいUIは、製品の成功に不可欠であり、ユーザーの満足度とエンゲージメントを高めます。また、良いUIは、ユーザーが目的を達成するための効率を向上させ、ストレスを軽減します。そのため、UI設計には、明確なビジュアル階層、簡潔なナビゲーション、そして一貫性のあるデザイン言語が求められます。これにより、ユーザー体験は向上し、ブランドの信頼性が築かれます。
            最終的に、優れたUIは、製品の使いやすさを反映し、ユーザーにとって価値のあるものとなります。<br />
            ユーザーエクスペリエンス（UX）は、製品やサービスを利用する際のユーザーの感情や認識を包括的に指します。良いUXは、ユーザーが直感的に操作でき、満足感を得られる体験を提供することを目指します。これには、使いやすさ、アクセシビリティ、効率性が含まれます。ユーザーのニーズを理解し、それに応えるデザインを行うことで、ユーザーは製品を快適に、そして効果的に使用できるようになります。<br />
            したがって、UXは単なる機能性を超え、ユーザーにとっての価値創造に直結する重要な要素です。
            ユーザーの感情や認識を包括的に指します。良いUXは、ユーザーが直感的に操作でき、満足感を得られる体験を提供することを目指します。これには、使いやすさ、アクセシビリティ、効率性が含まれます。ユーザーのニーズを理解し、それに応えるデザインを行うことで、ユーザーは製品を快適に、そして効果的に使用できるようになります。
            したがって、UXは単なる機能性を超え、ユーザーにとっての価値創造に直結する重要な要素です。
          </p>
          <Row class="mt-4" justify-content="center">
            <Col col="3">
          <b-button
            class="px-4"
            button="success"
            dismiss="modal"
          >
            戻る
          </b-button>
        </Col>
          </Row>
        </ModalBody>
      </ModalContent>
    </ModalDialog>
  </Modal>
</div>
</template>

