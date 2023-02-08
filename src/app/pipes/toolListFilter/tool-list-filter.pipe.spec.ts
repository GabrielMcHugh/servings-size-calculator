import { ShallowEqualityService } from 'src/app/services/utils/shallow-equality.service';
import { ToolListFilterPipe } from './tool-list-filter.pipe';

describe('ToolListFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ToolListFilterPipe(new ShallowEqualityService);
    expect(pipe).toBeTruthy();
  });
});
