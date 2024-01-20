<template>
<div style="background-color: #06C38B; height: 100vh;">
  <Container>
    <Row justify-content="evenly">
      <Col class="mt-5" col="8">
      <Progress>
    <ProgressBar
      striped
      background-color="success"
      animated
      :value="75"
    />
  </Progress>
      </Col>
      <Col class="mt-5" col="4">
        <slot />
      </col>
    </Row>
  </Container>
</div>
</template>