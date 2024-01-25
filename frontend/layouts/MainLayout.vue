<template>
  <div style="background-color: #06C38B; height: 100vh;">
    <Container class="pt-5">
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
          <b-div
            rounded
            class="my-4"
            style="
              width: 100%;
              height: 700px;
              background-color: white;
            "
          >
            <slot />
          </b-div>
        </Col>
        <Col class="mt-4" col="md-3">
          <Col col="7" offset="md-5" class="mb-5">
            <CountdownButton />
          </Col>
        </Col>
      </Row>
    </Container>
  </div>
</template>


