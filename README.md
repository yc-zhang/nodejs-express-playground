# Playground of Express

This is an example nodejs express project, which I'm seeking if it easy to use it build RESTFul web services.

The following points should be checked during this spike, to make sure everything is ready.

### Build 

The app will be released as a docker image, which has a Dockerfile to describe the components.  Also a docker-compose file will be used in local-testing, pre-push verification in future.  We have the following commands to invoke each task.

- `npm run build-image`: build the image with version, this should be invoked in CI server, which could build an image with build number for us.
- `npm run publish-image`: release the image, we do not here because we don't release it anymore.
- `npm run local-run`: run the compose images locally, for testing or something else.

We'll introduce the other tasks like **test**, **pre-push check** later.

### TODO

- [x] Dockerised
- [x] Route binding.
- [x] Unit test.
- [ ] ORM integration.
- [ ] Middleware binding.
- [ ] API doc generator.
- [ ] Authentication & Log & Throughput Limitation & Validation.
- [ ] Consider the Ngnix as reverse proxy
