import { configure, addDecorator, moduleMetadata } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { ChartjsModule } from '../src/lib/chartjs.module';

setCompodocJson(docJson);

addDecorator(moduleMetadata({ imports: [ChartjsModule] }));

// automatically import all files ending in *.stories.ts
configure(require.context('../src', true, /\.stories\.(ts|mdx)$/), module);
