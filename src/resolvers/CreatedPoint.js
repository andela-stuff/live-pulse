export default {
  subscribe: (root, args, context, info) => 
    context.prisma.$subscribe.point({ mutation_in: ['CREATED'] }).node(),
  resolve: payload => payload,
}
