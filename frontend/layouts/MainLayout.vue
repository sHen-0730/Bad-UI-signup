<template>
<div style="background-color: #06C38B; height: 100vh;">
  <Container>
    <Row justify-content="between">
      <Col class="mt-5" col="8" offset="md-1">
      <Progress>
    <ProgressBar
      striped
      background-color="success"
      animated
      :value="75"
    />
  </Progress>
      </Col>
      <Col class="mt-4" col="md-2" offset="md-1">
        <CountdownButton />
        <slot />
      </col>
    </Row>
  </Container>
</div>
</template>